import { Slot, component$ } from '@builder.io/qwik';
import Navbar from '~/components/shared/navbar/navbar';

export default component$(() => {
  return(
    <>
        <Navbar />
        <div class="flex  flex-col justify-center items-center mt-2">
            <h3 class="text-5xl">DashBoard Layout</h3>
            <Slot />
        </div>
    </>
  )
});