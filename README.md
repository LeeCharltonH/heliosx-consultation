## To get started

Clone the repo and run the command `npm start` to launch the app in your browser

### Performance optimisations

I've added a landing page and wrapped the `Form` component in a Suspense component to lazy load the Form. In a real life scenario, the landing page should be optimised for SEO, so using code splitting to reduce the initial bundle size has improved the latency on the initial page load.

The radio input elements receive a callback function from the parent component. This has been wrapped in a useCallback to avoid unnecessary rereders. The input component has also been wrapped with React memo to stop rerending child components when the props haven't changed.

The Header component uses a srcset to dynamically load a smaller logo image for mobile devices.

### State management

I've opted to use [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) as a state management library. Given the simplicity of the application, this library felt like a good choice as it reduces a lot of boilerplate code needed to setup a store compared to other state management tools such as Redux. 

Within the consultation store, I've exported several hooks to manage state updates and retrieving data from the store. This is mainly to reduce repetitive code and make the code more readable.

### Styling

I've installed sass to compile the styling for this application. Using modular scss files to limit the scope of the styling to their respective components.

I've used media queries to optimise the application for different screen sizes. Button and radio elements have an increased size for smaller devices to make them easier to click on mobile devices. 

The footer uses flexbox to change the layout from two columns to one column.