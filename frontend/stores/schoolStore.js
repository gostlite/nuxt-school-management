//  user auth store to keep track of the authenticated user

import { defineStore } from "pinia";

// export const supabase = useSupabaseClient();

export const useSchoolStore = defineStore({
  id: "schoolstore",
  state: () => {
    return {
      role: {},
      classes: reactive([]),
      school: {},
      currentClass: {},
      students: [],
      parents: [],
      teachers: [],
      activities: [],

      studentsinclass: [],
      teacherRoles: [], // this will return all teachers from the userroles
    };
  },
  getters: {
    studentCount() {
      return this.students.length;
    },
    parentCount() {
      return this.parents.length;
    },
    classesCount() {
      return this.classes.length;
    },
    teachersCount() {
      return this.teachers.length;
    },
  },

  actions: {
    async init() {
      await this.getRole();
      await this.getSchool();
      await this.getClasses();
      await this.getStudents();
      await this.getParents();
      await this.getTeachers();
    },
    async getRole() {
      const user = useSupabaseUser();
      const { id: userid } = user.value;
      const supabase = useSupabaseClient();

      let { data: roles, error } = await supabase
        .from("user_roles")
        .select(
          `*, roles(
          *
        )`
        )
        .eq("user_id", userid);

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }
      this.role = roles[0];
      return this.role;
    },
    async getClasses(email, password) {
      let supabase = useSupabaseClient();

      let { data: classes, error } = await supabase
        .from("classes")
        .select(`*, students(count)`)
        .eq("school_id", this.school.id);

      if (error) {
        console.error(error.message);
        throw new Error(error.message);
      }
      this.classes = classes;
      return this.classes;
    },
    async ListClasses() {
      const supabase = useSupabaseClient();
      const { data: classes, error: classesError } = await supabase
        .from("classes")
        .select("id, name")
        .eq("school_id", await this.getSchoolId());
      if (!classesError) return classes;
    },
    async getSchoolId() {
      const user = useSupabaseUser();
      const { id: userid } = user.value;
      const supabase = useSupabaseClient();

      let { data: school_id, error } = await supabase
        .from("user_roles")
        .select("school_id")
        .eq("user_id", userid);

      if (error) {
        this.errormessage = error;
        console.error(error);
      }
      this.school.id = school_id[0].school_id;
      return this.school.id;
    },
    // getting the school uuid for upload and download of files
    async getSchoolUuid() {
      const school_id = await this.getSchoolId();
      const supabase = useSupabaseClient();
      const { data, error } = await supabase
        .from("schools")
        .select("school_uuid")
        .eq("id", school_id)
        .select();
      this.school.uuid = data[0]["school_uuid"];

      return data[0]["school_uuid"];
    },

    async getSchoolName() {
      const school_id = await this.getSchoolId();
      const supabase = useSupabaseClient();
      let { data, error } = await supabase
        .from("schools")
        .select("name")
        .eq("id", school_id)
        .select();
      return data[0].name;
    },
    async getSchool() {
      const user = useSupabaseUser();
      const { id: userid } = user.value;
      const supabase = useSupabaseClient();

      let { data, error } = await supabase
        .from("schools")
        .select(`*`)
        .eq("id", this.role.school_id);

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }
      this.school = data[0];
      return this.school.id;
    },
    async getStudents() {
      const supabase = useSupabaseClient();
      let { data: students, error } = await supabase
        .from("students")
        .select(`*, parents:profiles(*), classroom:classes(*)`)
        .eq("school_id", this.school.id);

      if (error) {
        console.error(error.message);
        throw new Error(error.message);
      }
      this.students = students;
    },
    async getATeachersclass(user_id) {
      const supabase = useSupabaseClient();
      let { data: classes, error } = await supabase
        .from("classes")
        .select("*")
        .eq("teacher_id", user_id);
      if (!error) return classes;
    },
    async getStudentsInAClass(classID) {
      const school_id = await this.getSchoolId();
      const supabase = useSupabaseClient();
      let { data: students, error } = await supabase
        .from("students")
        .select("*")
        .eq("school_id", school_id)
        .eq("class_id", classID);
      if (!error) return students;
      console.error(error);
    },
    async getParents() {
      const supabase = useSupabaseClient();
      // get role_users with parent role
      let { data: parent } = await supabase
        .from("roles")
        .select("*")
        .eq("name", "Parent")
        .limit(1)
        .single();

      let { data: roles, error: roleError } = await supabase
        .from("user_roles")
        .select("user_id")
        .eq("role_id", parent.id)
        .eq("school_id", this.role.school_id);
      if (roleError) {
        console.error(error.message);
        throw new Error(error.message);
      }

      let { data: parents, error } = await supabase
        .from("profiles")
        .select("*")
        .in(
          "id",
          roles.map((role) => role.user_id)
        );
      if (error) {
        console.error(error.message);
        throw new Error(error.message);
      }
      this.parents = parents;
    },
    async getActivities() {
      const supabase = useSupabaseClient();
      const currentAuthId = useSupabaseUser().value.id;
      let school_id = this.school.id ?? (await this.getSchoolId());
      let { data: activities, error } = await supabase
        .from("activities")
        .select("*")
        .eq("school_id", this.school.id)
        .order("created_at", { ascending: false });
      // let { data: activities, error } = await supabase
      //   .from("activities")
      //   .select(`
      //   *,
      //   (
      //     likes @> '[{"user_id": "${currentAuthId}"}]'
      //   ) AS hasLiked
      // `)
      //   // .eq("school_id", this.school.id)
      //   .order("created_at", { ascending: false });

      if (error) {
        console.error(error.message);
        throw new Error(error.message);
      }
      this.activities = activities;
      return activities;
    },
    async getTeachers() {
      const supabase = useSupabaseClient();
      // get role_users with parent role
      let { data: parent } = await supabase
        .from("roles")
        .select("*")
        .eq("name", "Teacher")
        .limit(1)
        .single();

      let { data: roles, error: roleError } = await supabase
        .from("user_roles")
        .select("user_id")
        .eq("role_id", parent.id)
        .eq("school_id", this.role.school_id)
        .select();
      if (roleError) {
        console.error(error.message);
        throw new Error(error.message);
      }
      // getting teachers from userRoles
      this.teacherRoles = roles;

      let { data: teachers, error } = await supabase
        .from("profiles")
        .select("*")
        .in(
          "id",
          roles.map((role) => role.user_id)
        );
      if (error) {
        console.error(error.message);
        throw new Error(error.message);
      }
      this.teachers = teachers;
      return teachers;
    },
    async getattendanceofclass(studentID, date) {
      const supabase = useSupabaseClient();
      let { data: students, error } = await supabase
        .from("attendances")
        .select("*")
        .eq("date", date)
        .eq("student_id", studentID);
      if (!error) return students;
    },
    async createAttendancerecord(classID, studentID, date, status) {
      const supabase = useSupabaseClient();
      const { error } = await supabase.from("attendances").insert({
        class_id: classID,
        student_id: studentID,
        date: date,
        status: status,
      });
      if (error) return error;
    },
    async updateattendance(value, classID, studentID, date) {
      const supabase = useSupabaseClient();
      const { data, error } = await supabase
        .from("attendances")
        .update({ status: value })
        .eq("class_id", classID)
        .eq("student_id", studentID)
        .eq("date", date)
        .select();
      if (!error) return data;
    },
    async logOut() {
      const user = useSupabaseClient();
      await user.auth.signOut();
      navigateTo("/");
    },

    // get the class teacher of a class

    getClassTeacher() {
      const user = useSupabaseUser();
      return this.teacherRoles.find((value) => {
        return value.user_id === user.value.id;
      });
    },

    // get the class teacher profile

    getTeacherProfile() {
      const user = useSupabaseUser();
      return this.teachers.find((teacher) => teacher.id === user.value.id);
    },

    // get students of a particular class
    async getClassStudents() {
      const supabase = useSupabaseClient();

      const { data: students, error: classError } = await supabase
        .from("students")
        .select("*")
        .eq("class_id", this.getClassTeacher().class_id);
      if (classError) {
        throw new Error(classError.message);
      }
      return students;
    },
    // get current class profile

    async getClassProfile() {
      const supabase = useSupabaseClient();
      const { data: classProfile, error: classError } = await supabase

        .from("classes")
        .select("*")
        .eq("id", this.getClassTeacher().class_id);
      if (classError) {
        throw new Error(classError.message);
      }
      return classProfile;
    },

    //update parent profile
    async updateParentProfile(
      id,
      first_name,
      last_name,
      email,
      phone,
      avatar_url,
      country,
      state,
      city,
      address1,
      address2
    ) {
      const supabase = useSupabaseClient();
      const { data, error } = await supabase
        .from("profiles")
        .update({
          first_name: first_name,
          last_name: last_name,
          email: email,
          phone: phone,
          avatar_url,
          address: {
            country: country,
            state: state,
            city: city,
            address_line_1: address1,
            address_line_2: address2,
          },
        })
        .eq("id", id)
        .select();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },

    async getParent_from(queryName, queryId) {
      const supabase = useSupabaseClient();
      let { data: students, error } = await supabase
        .from("students")

        .select(
          `*,
    profiles(
      *
    )
  `
        )
        .eq(queryName, queryId);
      if (!error) return students;
    },

    async getParentChildren(parent_id) {
      const supabase = useSupabaseClient();
      const { data: students, error } = await supabase
        .from("students")
        .select(
          `*,
    classes(
      *
    )`
        )
        .eq("parent_id", parent_id);
      return students;
    },
  },
});
