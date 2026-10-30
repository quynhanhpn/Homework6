const deleteTask = async (id) => {
  const response = await fetch(
    `https://mindx-mockup-server.vercel.app/api/resources/tasks/${id}?apiKey=${apiKey}`,
    {
      method: "DELETE",
    },
  );

  const data = await response.json();

  if (!response.ok) {
    console.log("Lỗi:", data.message);
    return;
  }

  console.log("Xóa thành công:", data);
};

// Thay bằng ID task thực tế từ console.table
// deleteTask("ID_TASK_CAN_XOA");
