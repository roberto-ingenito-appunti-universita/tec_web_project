import { Component } from '@angular/core';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-create-idea',
  standalone: true,
  imports: [RichTextEditorModule],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
  templateUrl: './create-idea.component.html',
  styleUrl: './create-idea.component.scss'
})
export class CreateIdeaComponent {

}

/* 
[
      ['bold', 'italic', 'underline'],  // toggled buttons
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': ['center'] }],
      ['clean'], // remove formatting 
      ['link']
    ]
*/
