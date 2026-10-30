const updateTask = async (id) => {
  const response = await fetch(
    `https://mindx-mockup-server.vercel.app/api/resources/tasks/${id}?apiKey=${apiKey}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hoàn thành bài tập JavaScript",
        flagId: 1,
        statusId: 2,
        assignedTo: "6ae4e0380f578319aedce521",
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    console.log("Lỗi:", data.message);
    return;
  }

  console.log("Cập nhật thành công:", data);
};

// updateTask("ID_TASK_CAN_CAP_NHAT");
