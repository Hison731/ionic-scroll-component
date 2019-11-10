import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';


@Component({
    selector: 'app-listscroll',
    templateUrl: './listscroll.component.html',
    styleUrls: ['./listscroll.component.scss'],
})

export class ListscrollComponent implements OnInit {
    // @ts-ignore
    @ViewChild(IonContent) content: IonContent;
    @Input() list: string;
    showtop = false;
    showbottom = true;

    constructor() {
    }

    ngOnInit() {
    }

    async scrolltotop() {
      const scrollElement = await this.content.getScrollElement();   // get the scrollelement
      const scrolltop = scrollElement.scrollTop;  // get scroll position
      this.content.scrollToPoint(0, scrolltop - 300, 500);   // move scroll 300 to top. 0.5s
    }

    async scrolltobottom() {
        const scrollElement = await this.content.getScrollElement();  // get the scrollelement
        const scrolltop = scrollElement.scrollTop;  // get scroll position
        this.content.scrollToPoint(0, scrolltop + 300, 500); // move scroll 300 to bottom. 0.5s
    }

    async logScrolling($event) {
        const scrollElement = await this.content.getScrollElement();   // get the scrollelement
        const scrollheight = scrollElement.scrollHeight - scrollElement.clientHeight;   // get scroll height of scroll element

        const scrolltop = $event.detail.scrollTop;   // get scroll position
        this.showtop = scrolltop > 50;   // hide "scroll to bottom" button if the scroll is moved to very top.

        this.showbottom = scrollheight - scrolltop >= 50;    // hide "scroll to top" button if the scroll is moved to very bottom.
    }

}
