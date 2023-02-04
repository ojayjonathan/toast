 # Toast Notification in JavaScript

A toast notification is a small and non-intrusive message that appears on the screen to inform the user about something. The toast message in this project includes a close action and can take additional actions, message, and type as arguments. 

## Features

- Close action: The user can easily dismiss the toast message by clicking on the close button.
- Additional actions: The toast message can include additional actions that the user can take, such as clicking a button to perform a specific task.
- Message: The message argument allows you to specify the text that should be displayed in the toast message.
- Type: The type argument allows you to specify the type of message, such as success, error, or warning, and the toast can be styled accordingly.

## Usage
  
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

