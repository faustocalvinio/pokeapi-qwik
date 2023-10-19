import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useCounter } from '~/hooks/use-counter.hook';

export default component$(() => {

    const { counter, increase, decrease } = useCounter(12);

    

    return (
        <>
            <span class="text-4xl">Counter</span>
            <span class="text-4xl">{ counter.value }</span>
            <div class="flex gap-2 mt-6">
                <button onClick$={ decrease } class="btn btn-primary">-1</button>
                <button onClick$={ increase }class="btn btn-primary">+1</button>
            </div>
        </>
    )
});

export const head: DocumentHead = {
    title: `Counter Page`,  
  };