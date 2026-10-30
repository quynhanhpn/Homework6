const addUser = async () => {
  try {
    const response = await fetch(
      `https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Quynh Anh",
          email: "quynhanh@gmail.com",
          age: 20,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("Lỗi HTTP:", response.status);
      console.log("Chi tiết lỗi:", data);
      return;
    }

    console.log("Thêm user thành công:", data);
  } catch (error) {
    console.log("Lỗi kết nối:", error);
  }
};
