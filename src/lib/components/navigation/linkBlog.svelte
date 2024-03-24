<script lang=ts>
  import type {MarkComponentProps} from '@portabletext/svelte'
  export let portableText: MarkComponentProps<{
    href?: string
    newWindow?: boolean
  }>

  $: ({value} = portableText)

</script>



{#if value.href}
  <a href={value.href} target={'_blank'}  class={`bg-gradient-to-r from-blue-600 via-green-500 to-pink-500 400 inline-block text-transparent bg-clip-text font-bold border-dotted border-primary  hover:from-pink-500 hover:via-blue-600 hover:to-green-500 transition duration-300 hover:border-black !p-0`} >
<slot/>
</a>
{:else}
  <!-- If no valid URL, render only the contents of the mark -->
  <slot />
{/if}