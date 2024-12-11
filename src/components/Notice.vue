<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <van-cell
    class="notice"
  >
    <template #title>
      <i18n-t keypath="menus.adaptation-info" tag="p">
        <template #min>
          <code>min()</code>
        </template>
        <template #max>
          <code>max()</code>
        </template>
        <template #option>
          <code>maxDisplayWidth</code>
        </template>
      </i18n-t>

      <i18n-t keypath="menus.compatibility-info" tag="p">
        <template #documentation>
          <a target="_blank" href="https://easy-temps.github.io/easy-docs/vue3-vant-mobile/browser-adaptation">{{ t("menus.doc") }}</a>
        </template>
      </i18n-t>

      <ul>
        <i18n-t keypath="menus.browser-support.min-max-clamp" tag="li">
          <template #compat_min>
            <span class="yes-min">{{ t("menus.browser-support.compat") }}</span><span class="no-min">{{ t("menus.browser-support.not-compat") }}</span>
          </template>
          <template #min>
            <code>min()</code>
          </template>
          <template #max>
            <code>max()</code>
          </template>
          <template #clamp>
            <code>clamp()</code>
          </template>
        </i18n-t>
        <i18n-t keypath="menus.browser-support.calc" tag="li">
          <template #compat_calc>
            <span class="yes-calc">{{ t("menus.browser-support.compat") }}</span><span class="no-calc">{{ t("menus.browser-support.not-compat") }}</span>
          </template>
          <template #calc>
            <code>calc()</code>
          </template>
        </i18n-t>
        <i18n-t keypath="menus.browser-support.vw" tag="li">
          <template #compat_vw>
            <span class="yes-vw">{{ t("menus.browser-support.compat") }}</span><span class="no-vw">{{ t("menus.browser-support.not-compat") }}</span>
          </template>
          <template #vw>
            <code>vw</code>
          </template>
        </i18n-t>
      </ul>

      <p class="show">
        {{ t('menus.consider-compatibility') }}
      </p>
    </template>
  </van-cell>
</template>

<style scoped>
.notice {
  font-size: 11px;
  line-height: 17px;
}
code {
  background: rgba(142, 150, 170, 0.14);
  padding: 2px 6px;
  color: #51a13c;
  border-radius: 4px;
}
p {
  margin: 9px 0;
}
a {
  text-decoration: underline;
  color: #51a13c;
  text-underline-offset: 3px;
}
.yes-min,
.yes-vw,
.yes-calc {
  color: green;
  display: none;
}
.no-min,
.no-vw,
.no-calc {
  color: red;
  display: none;
}

.show {
  display: none;
}

@supports (left: min(1px, 2px)) {
  .yes-min {
    display: inline;
  }
}
@supports not (left: min(1px, 2px)) {
  .no-min {
    display: inline;
  }
}
@supports (left: calc(1px + 2px)) {
  .yes-calc {
    display: inline;
  }
}
@supports not (left: calc(1px + 2px)) {
  .no-calc {
    display: inline;
  }
}
@supports (left: 1vw) {
  .yes-vw {
    display: inline;
  }
}
@supports not (left: 1vw) {
  .no-vw {
    display: inline;
  }
}

@supports (left: min(1px, 2px)) and (left: calc(1px + 2px)) and (left: 1vw) {
  .show {
    display: block;
  }
}
</style>
