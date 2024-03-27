<script lang=ts>
  import type {MarkComponentProps} from '@portabletext/svelte'
  export let portableText: MarkComponentProps<{
    href?: string
    newWindow?: boolean
  }>

  $: ({value} = portableText)

</script>



{#if value.href}
  <a href={value.href} target={'_blank'}  class={`bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 dark:from-purple-500 dark:via-blue-500 dark:to-pink-500  inline-block text-transparent bg-clip-text font-semibold border-b-2   hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 hover:dark:from-pink-600 hover:dark:via-purple-600 hover:dark:to-blue-600  max-w-max hover:border-black dark:border-purple-500 group leading-tight !p-0`} >
<slot/>  <small class="rotate-3"> » </small>
</a>
{:else}
  <!-- If no valid URL, render only the contents of the mark -->
  <slot />
{/if}