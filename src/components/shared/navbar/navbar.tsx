import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../../icons/qwik";
import styles from "./navbar.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <Link href="/" title="qwik">
            <QwikLogo height={50} />
          </Link>
        </div>
        <ul>
          <li>
            <Link class="text-2xl max-md:text-sm" href="/pokemons/list-ssr/?offset=0">List - SSR</Link>           
          </li>
          <li>
            <Link class="text-2xl max-md:text-sm" href="/pokemons/list-client/">List - client</Link>
          </li>
          <li>
            <Link class="text-2xl max-md:text-sm" href="/counter">Counter Hook</Link>
          </li>
          <li>
            <Link class="text-2xl max-md:text-sm" href="/login">Login</Link>
          </li>
          <li>
            <Link class="text-2xl max-md:text-sm" href="/dashboard">Admin Dashboard</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
