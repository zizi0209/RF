import "./App.css";
import { Routes, Route } from "react-router";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";

import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        clickables={[
          'a', 'h1',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          '.interactive-element'
        ]}
      />

      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout || DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout >
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
