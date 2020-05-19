import { Application, Router } from "https://deno.land/x/oak/mod.ts";

interface Course {
  name: string;
  price: number;
  certification: boolean;
}

//file:data

let courses: Array<Course> = [
  {
    name: "C++ Bootcamp",
    price: 2.4,
    certification: true,
  },
  {
    name: "Python Bootcamp",
    price: 4.4,
    certification: true,
  },
  {
    name: "Java Bootcamp",
    price: 3.4,
    certification: true,
  },
];

//file:controllers

export const getCourses = ({ response }: { response: any }) => {
  response.body = courses;
};

export const addCourses = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  const course: Course = body.value;

  courses.push(course);
  response.body = { courseAdded: "Success" };
  response.status = 200;
};

// File:server files
const router = new Router();

const app = new Application();
const PORT = 4300;
router.get("/learn", getCourses).post("/create", addCourses);
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 4300 });
