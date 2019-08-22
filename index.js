const express = require("express");

const server = express();

server.use(express.json());

const projects = [];
let countRequests = 0;

/* Middlewares */
server.use((req, res, next) => {
  countRequests++;
  console.log(
    `Numero de requisicoes realizadas até o momento: ${countRequests}`
  );
  return next();
});

function VerifyIdProjectExists(req, res, next) {
  if (!projects.find(p => p.id == req.params.id)) {
    return res.status(404).json({ message: "Project not found" });
  }
  return next();
}

/* Routes */
server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const newProject = { id, title, tasks: [] };

  projects.push(newProject);
  return res.json(newProject);
});

server.post("/projects/:id/tasks", VerifyIdProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);
  project.tasks.push(title);

  return res.json(project);
});

server.put("/projects/:id", VerifyIdProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);
  project.title = title;

  return res.json(project);
});

server.delete("/projects/:id", VerifyIdProjectExists, (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

server.listen(3000);
