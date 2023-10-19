import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import Navbar from "~/components/shared/navbar/navbar";

import styles from "./styles.css?inline";
import { PokemonProvider } from "~/context";

export default component$(() => {
  useStyles$(styles);
  
  return (

    <PokemonProvider>
      <Navbar />
      <main class="flex justify-center items-center flex-col">
        <Slot />
      </main>      
    </PokemonProvider>
  );
});
