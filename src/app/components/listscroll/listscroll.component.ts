import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent} from '@ionic/angular';


@Component({
    selector: 'app-listscroll',
    templateUrl: './listscroll.component.html',
    styleUrls: ['./listscroll.component.scss'],
})

export class ListscrollComponent implements OnInit {
    // @ts-ignore
    @ViewChild(IonContent) content: IonContent;
    showtop = false;
    showbottom = true;

    constructor() {
    }

    ngOnInit() {
    }

    async scrolltotop() {
      const scrollElement = await this.content.getScrollElement();
      const scrolltop = scrollElement.scrollTop;
      this.content.scrollToPoint(0, scrolltop - 300, 1000);
    }

    async scrolltobottom() {
        const scrollElement = await this.content.getScrollElement();
        const scrolltop = scrollElement.scrollTop;
        this.content.scrollToPoint(0, scrolltop + 300, 1000);
    }

    logScrollStart() {
        console.log('logScrollStart : When Scroll Starts');
    }

    async logScrolling($event) {
        const scrollElement = await this.content.getScrollElement();
        const scrollheight = scrollElement.scrollHeight - scrollElement.clientHeight;

        const scrolltop = $event.detail.scrollTop;
        this.showtop = scrolltop > 50;

        this.showbottom = scrollheight - scrolltop >= 50;
    }

    logScrollEnd() {
        console.log('logScrollEnd : When Scroll Ends');
    }

}
