import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // let WebAdmin_VARS = {
    //   BODY: $("body"),
    //   WRAPPER: $('#wrapper'),
    //   LEFT_ITEMS: $('.left ul')
    // };
    // ! function (e: any) {

    //   let i = function () {
    //     this.$body = WebAdmin_VARS.BODY,
    //       this.$openLeftBtn = e('.open-left'), this.$menuItem = e('#sidebar-menu a'),
    //       this.$subDropItem = e('.subdrop'), this.$leftMenuToggle = e('.open-left'),
    //       this.$firstMenuChild = e('#sidebar-menu ul li.has_sub a.active');
    //   };
    //   i.prototype.menuItemClick = function (i) {
    //     WebAdmin_VARS.WRAPPER.hasClass('enlarged') || (e(this).parent().hasClass('has_sub') && i.preventDefault(),
    //       e(this).hasClass('subdrop') ? e(this).hasClass('subdrop') && (e(this).removeClass('subdrop'),
    //         e(this).next('ul').slideUp(350), e('.pull-right i', e(this).parent()).removeClass('mdi-minus').addClass('mdi-plus')) : (e('ul', e(this).parents('ul:first')).slideUp(350),
    //           e('a', e(this).parents('ul:first')).removeClass('subdrop'), e('#sidebar-menu .pull-right i').removeClass('mdi-minus').addClass('mdi-plus'), e(this).next('ul').slideDown(350),
    //           e(this).addClass('subdrop'), e('.pull-right i', e(this).parents('.has_sub:last')).removeClass('mdi-plus').addClass('mdi-minus'), e('.pull-right i', e(this).siblings('ul')).removeClass('mdi-minus').addClass('mdi-plus')));
    //   }, i.prototype.init = function () {
    //     let i = this;
    //     i.$leftMenuToggle.on('click', function (e) {
    //       e.stopPropagation(), i.openLeftBar();
    //     }), i.$menuItem.on('click', i.menuItemClick), i.$firstMenuChild.parents('li:last').children('a:first').addClass('active').trigger('click'), i.$menuItem.each(function () {
    //       this.href == window.location.href && (e(this).addClass('active'), e(this).parent().addClass('active'), e(this).parent().parent().prev().addClass('active'), e(this).parent().parent().prev().trigger('click'));
    //     });
    //   }, e.Sidemenu = new i, e.Sidemenu.Constructor = i;
    // } (window['jQuery']);
  }

}
