export class Root {
  public $hamburger;
  public $sidebar;
  public $sidebarMenu;
  public $navbar;
  public $footerText;
  public menuItems: Array<string>;

  constructor() {
    // Node elements
    this.$hamburger = document.getElementById('btn-hamburger') as HTMLElement;
    this.$navbar = document.getElementById('navbar__left-menu') as HTMLElement;
    this.$sidebar = document.getElementById('sidebar') as HTMLElement;
    this.$sidebarMenu = document.getElementById('sidebar__menu') as HTMLElement;
    this.$footerText = document.getElementById('footer__text') as HTMLElement;

    //Variables
    this.menuItems = ['About', 'Works', 'Contact'];
  }
}
