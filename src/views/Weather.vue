<template>
  <div>
    <div class="overflow-hidden">
      <div class="row">
        <div class="col-12 col-md-5 order-md-2">
          <RightSitePanel class="overflow-hidden" />
        </div>
        <div class="col-12 col-md-7 order-md-1">
          <LeftSitePanel/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import RightSitePanel from '../components/RightSitePanel.vue'
import LeftSitePanel from '../components/LeftSitePanel.vue'

export default {
  name: 'HomePage',
  components: { RightSitePanel, LeftSitePanel },
}
</script>
