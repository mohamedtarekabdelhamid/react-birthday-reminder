# Birthday Reminder React App

This is a simple React application that displays a list of people's birthdays, allowing users to see how old they are and optionally clear the list. It's a great beginner-friendly project for practicing React fundamentals such as state management, props, and mapping through arrays.

## Features

- Display a list of people with their:
  - Name
  - Age
  - Profile picture
- Button to clear the entire list.
- Dynamically updates the UI based on the state.

## Technologies Used

- **React**: Used for building the user interface.
- **CSS**: Styling the components.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedtarekabdelhamid/react-birthday-reminder.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-birthday-reminder
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Folder Structure

```
react-birthday-reminder/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── List.js       # Displays the list of birthdays
│   │   ├── Button.js     # Clear list button component
│   ├── data.js           # Data file containing the list of people
│   ├── App.js            # Main app component
│   ├── index.js          # Entry point of the app
│   ├── style.css         # Styling for the app
├── README.md             # Project documentation
├── package.json
```

## How It Works

1. **Data Source**: The app uses a static `data.js` file that contains an array of objects representing people. Each object has the following properties:
   - `id`: Unique identifier for the person.
   - `name`: The person's name.
   - `age`: The person's age.
   - `image`: A URL for the person's profile picture.

2. **Dynamic Rendering**: The `App.js` component manages the state and renders the list of people using the `List.js` component. The data is passed as props.

3. **Clear List Functionality**: Clicking the "Clear All" button clears the list by setting the state to an empty array.

## Customization

You can easily add or modify people in the `data.js` file to customize the app.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Feel free to explore, modify, and enhance the project!

