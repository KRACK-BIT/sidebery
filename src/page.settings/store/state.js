import Manifest from '../../../addon/manifest.json'
import { DEFAULT_SETTINGS, SETTINGS_OPTIONS } from '../../defaults'
import { DEFAULT_TABS_MENU } from '../../defaults'
import { DEFAULT_TABS_PANEL_MENU } from '../../defaults'
import { DEFAULT_BOOKMARKS_MENU } from '../../defaults'
import { DEFAULT_BOOKMARKS_PANEL_MENU } from '../../defaults'

export default {
  version: Manifest.version,
  osInfo: null,
  os: null,
  ffInfo: null,
  ffVer: null,
  private: browser.extension.inIncognitoContext,
  windowId: 0,
  windowFocused: true,

  activeView: 'Settings',
  activeSection: 'settings_general',
  selectedPanel: null,
  navLock: false,
  highlightedField: '',
  highlight: {
    allUrls: false,
    tabHide: false,
  },

  panels: [],

  tabsMenu: JSON.parse(JSON.stringify(DEFAULT_TABS_MENU)),  
  tabsPanelMenu: JSON.parse(JSON.stringify(DEFAULT_TABS_PANEL_MENU)),  
  bookmarksMenu: JSON.parse(JSON.stringify(DEFAULT_BOOKMARKS_MENU)),
  bookmarksPanelMenu: JSON.parse(JSON.stringify(DEFAULT_BOOKMARKS_PANEL_MENU)),

  ...SETTINGS_OPTIONS,
  ...DEFAULT_SETTINGS,
  snapshots: [],
  keybindings: [],

  permAllUrls: false,
  permTabHide: false,
}