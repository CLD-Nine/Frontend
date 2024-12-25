const handler = async (req, res) => {
  const { method } = req;

  if (method == "POST") {
    const { user_input, user_id } = req.body;

    try {
      const response = await fetch("http://13.59.194.186/cld9aiv2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `No Auth`,
        },
        body: new URLSearchParams({
          user_input: "ready",
          user_id:
            "2c04672d9b03d139a1489077e80b5398660b7af5a5b86077426ddb2bd3aa0461",
        }),
      });

      if (response.ok) {
        const data = await response.text();
        console.log("cld9ai data: ", data);

        return res.status(200).json({ message: "API call successful.", data });
      } else {
        const errorText = await response.text();
        console.log("Error: ", errorText);
        return res
          .status(response.status)
          .json({ message: "Something went wrong.", error: errorText });
      }
    } catch (error) {
      console.log("cld9ai error => ", error);
      return res
        .status(500)
        .json({ message: "cld9ai error", error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
