"use client";

import { useEffect, useState } from "react";

export default function EventsDemoPage() {
  const [message, setMessage] = useState("Choose an action.");

  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [keyMessage, setKeyMessage] = useState("Press a key.");
  const [width, setWidth] = useState(null);

  // Browser resize demonstration.
  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Button event and event object.
  function handleClick(event) {
    console.log("Target:", event.target);
    console.log("Current target:", event.currentTarget);
    console.log("Native event:", event.nativeEvent);

    setMessage("Welcome to Addis Eats!");
  }

  // Form submission demonstration.
  function handleSubmit(event) {
    event.preventDefault();

    setMessage(`Welcome, ${name}!`);
  }

  // Event propagation demonstration.
  function handleCardClick() {
    setMessage("Dish details opened.");
  }

  function handleAddClick(event) {
    event.stopPropagation();

    setMessage("Dish added to cart.");
  }

  // Keyboard demonstration.
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      setKeyMessage("Escape was pressed.");
    } else if (event.key === "Enter") {
      setKeyMessage("Enter was pressed.");
    } else if (event.key === "ArrowDown") {
      setKeyMessage("Down arrow was pressed.");
    }
  }

  // Functional state updater.
  function increaseCount() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-pink-600">
          React Events Playground
        </h1>

        <p className="mt-3 text-gray-500">
          Explore the event-handling concepts from Day 48.
        </p>
      </div>

      {/* Click event and event object */}
      <section className="rounded-2xl border border-pink-100 p-6">
        <h2 className="text-xl font-bold">1. Button Click and Event Object</h2>

        <button
          type="button"
          onClick={handleClick}
          className="mt-4 rounded-full bg-pink-600 px-6 py-3 text-white"
        >
          Welcome
        </button>

        <p className="mt-4" aria-live="polite">
          {message}
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Open browser developer tools to see the event object.
        </p>
      </section>

      {/* Form event */}
      <section className="rounded-2xl border border-pink-100 p-6">
        <h2 className="text-xl font-bold">2. Form Submission</h2>

        <form onSubmit={handleSubmit} className="mt-4">
          <label htmlFor="demo-name" className="block font-medium">
            Enter your name
          </label>

          <input
            id="demo-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="mt-3 w-full rounded-xl border p-3"
          />

          <button
            type="submit"
            className="mt-4 rounded-full bg-pink-600 px-6 py-3 text-white"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Propagation */}
      <section className="rounded-2xl border border-pink-100 p-6">
        <h2 className="text-xl font-bold">3. Event Propagation</h2>

        <article
          onClick={handleCardClick}
          className="mt-4 rounded-xl bg-pink-50 p-5"
        >
          <h3 className="font-bold">Doro Wat</h3>

          <p className="my-3">Price: 450 ETB</p>

          <button
            type="button"
            onClick={handleAddClick}
            className="rounded-full bg-pink-600 px-5 py-3 text-white"
          >
            Add to cart
          </button>
        </article>
      </section>

      {/* Counter */}
      <section className="rounded-2xl border border-pink-100 p-6">
        <h2 className="text-xl font-bold">4. Functional State Update</h2>

        <p className="mt-4">Count: {count}</p>

        <button
          type="button"
          onClick={increaseCount}
          className="mt-4 rounded-full bg-pink-600 px-6 py-3 text-white"
        >
          Increase Count
        </button>
      </section>

      {/* Keyboard */}
      <section className="rounded-2xl border border-pink-100 p-6">
        <h2 className="text-xl font-bold">5. Keyboard Events</h2>

        <label htmlFor="keyboard-demo" className="mt-4 block">
          Focus this input and press a key.
        </label>

        <input
          id="keyboard-demo"
          onKeyDown={handleKeyDown}
          className="mt-3 w-full rounded-xl border p-3"
        />

        <p className="mt-4" aria-live="polite">
          {keyMessage}
        </p>
      </section>

      {/* Browser width */}
      <section className="rounded-2xl border border-pink-100 p-6">
        <h2 className="text-xl font-bold">6. Browser Events</h2>

        <p className="mt-4">
          {width === null
            ? "Reading screen width..."
            : `Current browser width: ${width}px`}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Resize your browser window to see the value change.
        </p>
      </section>
    </main>
  );
}
