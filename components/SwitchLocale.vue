<template>
  <div class="flex gap-3 ml-auto">

    <!-- Switch translator-->
    <div v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`"
         :data-tip="$t('lang.'+locale)"
         class="tooltip tooltip-bottom">
      <div @click="$i18n.locale = locale" class="btn btn-circle btn-sm btn-ghost">
        {{ locale }}
      </div>
    </div>
  </div>
</template>
