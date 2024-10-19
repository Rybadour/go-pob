<script>
  import SkillTree from '$lib/components/SkillTree.svelte';
  import { drawnGroups, loadSkillTree, skillTree, skillTreeVersion } from '$lib/skill_tree';
  import { onMount } from 'svelte';

  onMount(() => {
    if (!$skillTree || !$skillTreeVersion || drawnGroups.size === 0) {
      loadSkillTree('3_18');
    }
  });
</script>

{#if $skillTree && $skillTreeVersion && drawnGroups.size > 0}
  <SkillTree skillTree={$skillTree} skillTreeVersion={$skillTreeVersion} />
{/if}
