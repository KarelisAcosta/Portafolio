import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./../views/HomeView.vue"),
    },
    {
      path: "/aboutme",
      name: "aboutme",
      component: () => import("./../views/AboutMeView.vue"),
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("./../views/SkillsView.vue"),
    },
    {
      path: "/projects/:category",
      name: "projects",
      component: () => import("./../views/ProjectsView.vue"),
    },
    {
      path: "/project",
      name: "project",
      component: () => import("./../views/ProjectView.vue"),
    },
    {
      path: "/project/:name",
      name: "project",
      component: () => import("./../views/ProjectView.vue"),
    },
  ],
});

export default router;
