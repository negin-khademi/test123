import { Component, input } from '@angular/core';

/**
 * Represents a single tab item in the tabbed content component.
 */
export interface TabInterface {
  /** The title displayed on the tab header */
  title: string;

  /** The content shown when the tab is active */
  content: string;

  /** The CSS class or icon name used for the tab icon */
  icon: string;
}

@Component({
  selector: 'app-tab',
  imports: [],
  templateUrl: './tab.html',
  styleUrl: './tab.scss',
})
export class Tab {
  /**
   * Input property that provides the list of tabs to be displayed.
   *
   * @remarks
   * Each tab should include a title, content, and icon.
   *
   * @example
   * ```ts
   * <app-tabbed-content [tabs]="[
   *   { title: 'Home', content: 'Welcome to Home', icon: 'icon-home' },
   *   { title: 'Profile', content: 'User profile info', icon: 'icon-user' }
   * ]">
   * </app-tabbed-content>
   * ```
   */
  tabs = input.required<TabInterface[]>();

  /**
   * Index of the currently active tab.
   *
   * @default 0
   */
  activeTab = 0;
}
