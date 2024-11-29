# React Toaster Library

A lightweight and customizable React Toaster component for displaying notifications in your React applications.

## Features
- Easy to use hook-based API.
- Supports multiple notification types: `success`, `warning`, `error`, etc.
- Customizable animations, positions, durations, and callbacks.
- Responsive and styled out of the box.

---

## Installation

Install the package using npm or yarn:

```bash
npm install react-toaster-library

or

yarn add react-toaster-library
```

#
# Usage
### Example Code

Here’s an example of how to use the toaster in your application:

```javascript
import React from "react";
import "./styles.css"; // Import custom styles if needed
import useToasterHook from "react-toaster-library";

export default function App() {
  const { Toaster, trigger } = useToasterHook();

  return (
    <div className="App">
      {Toaster}
      <button
        onClick={() => {
          trigger({
            type: "warning", // Notification type (e.g., success, error)
            text: "This is a warning message!", // Message text
            position: "topLeft", // Position of the notification
            animation: "slide", // Animation style
            duration: 2000, // Display duration in milliseconds
            onClose: () => console.log("Notification closed!"), // Callback on close
          });
        }}
      >
        Show Notification
      </button>
    </div>
  );
}
```

---

## API Reference

### `useToasterHook`

#### Returns:
- **`Toaster`**: A React component that renders the notifications.
- **`trigger`**: A function used to trigger a new notification.

#### `trigger` Parameters:
| Parameter  | Type       | Description                                                                            | Default    |
|------------|------------|----------------------------------------------------------------------------------------|------------|
| `type`     | `string`   | Type of the notification (`success`, `warning`, `error`, etc.).                        | `info`     |
| `text`     | `string`   | The message text to display in the notification.                                       | -          |
| `position` | `string`   | Position of the notification (`topLeft`, `topRight`, `bottomLeft`, `bottomRight`).      | `topRight` |
| `animation`| `string`   | Animation style for showing/hiding the notification (`fade`, `slide`, etc.).            | `fade`     |
| `duration` | `number`   | How long (in ms) the notification stays visible.                                       | `3000`     |
| `onClose`  | `function` | Callback function triggered when the notification is closed.                           | `null`     |

---

## Customization

### Styling
You can override the default styles by providing your own CSS file. The `Toaster` component comes with minimal styles to ensure ease of customization. For example, include your own `styles.css` file:

```css
/* Example styles.css */
.toaster {
  font-family: Arial, sans-serif;
  z-index: 9999;
}

.toaster-notification {
  padding: 16px;
  border-radius: 4px;
  color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.toaster-notification.warning {
  background-color: #f4b400; /* Yellow for warnings */
}
```

---
Make sure to import your custom CSS file in your app:

```javascript
import "./styles.css";
```
---

## Contributing

Contributions are welcome! If you have ideas for new features, improvements, or bug fixes, feel free to contribute.

Steps to Contribute:

* Fork this repository.
* Create a new branch for your feature or bugfix.
* Commit your changes with a clear message.
* Push your branch and create a pull request.

---

## License

This project is licensed under the MIT License.
```plaintext
MIT License

Copyright (c) 2024 Mohsin Shaikh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
---

### Author

Maintained by [Mohsin Shaikh](https://github.com/mohsinsk)

---

### Support

If you find this library helpful, please consider giving it a ⭐ on GitHub!

If you encounter any issues or have questions, feel free to open an issue on GitHub or reach out at 1mohsin.sk@gmail.com