<template>
  <div class="flex gap-3 ml-auto">
    <!-- Switch translator-->
    <div
      v-for="locale in $i18n.availableLocales"
      :key="`locale-${locale}`"
      :data-tip="$t('lang.' + locale)"
      class="tooltip tooltip-bottom"
    >
      <div
        class="btn btn-circle btn-sm btn-ghost"
        @click="$i18n.locale = locale"
      >
        {{ locale }}
      </div>
    </div>
  </div>
</template>
