import { t } from "visual/utils/i18n";
import { hexToRgba } from "visual/utils/color";
import { getOptionColorHexByPalette } from "visual/utils/options";
import { defaultValueValue, defaultValueKey } from "visual/utils/onChange";

import { NORMAL, HOVER } from "visual/utils/stateMode";

export function getItems({ v, device, state }) {
  const dvk = key => defaultValueKey({ key, device });
  const dvv = key => defaultValueValue({ v, key, device, state });

  const { hex: borderColorHex } = getOptionColorHexByPalette(
    dvv("borderColorHex"),
    dvv("borderColorPalette")
  );

  return [
    {
      id: dvk("toolbarCurrentElement"),
      type: "popover",
      icon: "nc-facebook",
      title: t("Page"),
      devices: "desktop",
      position: 70,
      options: [
        {
          id: "href",
          label: t("Link"),
          type: "inputText-dev",
          devices: "desktop",
          placeholder: "https://www.facebook.com/groups/brizy/"
        },
        {
          id: "skin",
          label: t("Skin"),
          type: "select-dev",
          devices: "desktop",
          choices: [
            {
              title: t("Light"),
              value: "light"
            },
            {
              title: t("Dark"),
              value: "dark"
            }
          ]
        },
        {
          id: "showSocialContext",
          label: t("Show Social Context"),
          type: "switch-dev",
          devices: "desktop"
        },
        {
          id: "showMetaData",
          label: t("Show Meta Data"),
          type: "switch-dev",
          devices: "desktop"
        }
      ]
    },
    {
      id: dvk("popoverColor"),
      type: "popover",
      size: "auto",
      title: t("Colors"),
      devices: "desktop",
      roles: ["admin"],
      position: 80,
      icon: {
        style: {
          backgroundColor: hexToRgba(borderColorHex, v.borderColorOpacity)
        }
      },
      options: [
        {
          id: "tabsColor",
          type: "tabs",
          state,
          hideHandlesWhenOne: false,
          tabs: [
            {
              id: "tabBorder",
              label: t("Border"),
              options: [
                {
                  id: "border",
                  type: "border-dev",
                  states: [NORMAL, HOVER]
                }
              ]
            },
            {
              id: "tabBoxShadow",
              label: t("Shadow"),
              options: [
                {
                  id: "boxShadow",
                  type: "boxShadow-dev",
                  states: [NORMAL, HOVER]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "toolbarSettings",
      type: "popover",
      icon: "nc-cog",
      title: t("Settings"),
      roles: ["admin"],
      position: 110,
      options: [
        {
          id: "width",
          label: t("Width"),
          type: "slider-dev",
          devices: "desktop",
          config: {
            min: 180,
            max: 500,
            units: [{ value: "px", title: "px" }],
            debounceUpdate: true
          }
        },
        {
          id: dvk("advancedSettings"),
          type: "advancedSettings",
          sidebarLabel: t("More Settings"),
          label: t("More Settings"),
          icon: "nc-cog"
        }
      ]
    }
  ];
}
