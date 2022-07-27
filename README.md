 <p>
    <button id="open">try</button>
</p>
  
```javascript
    import toast from "./toast.js";
    toast.info({
        message: "try",
        options: {
          customButtons: [
            {
              onClick: () => window.location.reload(),
              label: "Reload",
            },
            {
              onClick: () =>
                toast.success({
                  message: "success Toast",
                  options: {
                    customButtons: [
                      {
                        onClick: () => alert("Success toast clicked!"),
                        label: "Show alert",
                      },
                    ],
                  },
                }),
              label: "Success",
            },
            {
              onClick: () =>
                toast.error({
                  message: "Error Toast",
                  options: {
                    customButtons: [
                      {
                        onClick: () => alert("Error toast clicked!"),
                        label: "Show alert",
                      },
                    ],
                  },
                }),
              label: "Error Toast",
            },
             {
              label: "Blue button",
              onClick: () => null,
              backgroundColor: "blue",
            },
          ],
        },
      });
  ```
  <script type="module">
    import toast from "./toast.js";
    document.getElementById("open").onclick = () => {
      toast.info({
        message: "Toast Opened",
        options: {
          customButtons: [
            {
              onClick: () => window.location.reload(),
              label: "Reload",
            },
            {
              onClick: () =>
                toast.success({
                  message: "success Toast",
                  options: {
                    customButtons: [
                      {
                        onClick: () => alert("Success toast clicked!"),
                        label: "Show alert",
                      },
                    ],
                  },
                }),
              label: "Success",
            },
            {
              onClick: () =>
                toast.error({
                  message: "Error Toast",
                  options: {
                    customButtons: [
                      {
                        onClick: () => alert("Error toast clicked!"),
                        label: "Show alert",
                      },
                    ],
                  },
                }),
              label: "Error Toast",
            },
          ],
        },
      });
    };
  </script>
