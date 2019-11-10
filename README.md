#How to use component.

To use listscroll component.

1. import listscroll component in components.module.ts
2. To use listscroll componet in home page
 - import components.module.ts in home.module.ts
 - add `<app-listscroll></app-listscroll>` where you want use the component


##Updates

#How to bind data to component.

`<app-listscroll [list]="datalist"></app-listscroll>`

In "home.page.ts" file, add a new variable to parse data to the component.
In this example it is named "datalist".
You can store the datalist in this variable.
And parse data to component using above code.
In this example, the datalist will be stored in "list" variable in "listscroll.component".

In "listscroll.component.ts" file, you can see this cdoe.

`@Input() list: string;`

