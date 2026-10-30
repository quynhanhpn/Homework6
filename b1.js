const apiKey = "6ae4d1ad55a8dca59b7abac7";

const getData = async (resource) => {
  const response = await fetch(
    `https://mindx-mockup-server.vercel.app/api/resources/${resource}?apiKey=${apiKey}`,
  );

  const result = await response.json();

  console.log(resource, result.data.data);

  return result.data.data;
};

getData("users");
getData("taskStatus");
getData("flags");
getData("tasks");

const filterTasks = async (flagId, statusId, assignedTo) => {
  const tasks = await getData("tasks");

  const result = tasks.filter((task) => {
    return (
      task.flagId == flagId &&
      task.statusId == statusId &&
      task.assignedTo == assignedTo
    );
  });

  console.log("Tasks sau khi lọc:", result);

  return result;
};

filterTasks(1, 2, 3);


