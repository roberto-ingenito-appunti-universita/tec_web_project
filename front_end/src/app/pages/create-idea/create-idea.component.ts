import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import {
  RichTextEditorModule,
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
  ToolbarSettingsModel,
  ToolbarType,
  RichTextEditorComponent
} from '@syncfusion/ej2-angular-richtexteditor';
import { IdeaService } from '../../services/idea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-idea',
  standalone: true,
  imports: [RichTextEditorModule],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
  templateUrl: './create-idea.component.html',
  styleUrl: './create-idea.component.scss'
})
export class CreateIdeaComponent {
  ideaService = inject(IdeaService)
  router = inject(Router)

  toolbarSettings: ToolbarSettingsModel = {
    type: ToolbarType.MultiRow,
    items: [
      'Bold', 'Italic', 'Underline', '|',
      'JustifyLeft', 'JustifyCenter', 'JustifyRight', '|',
      'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|',
      'Undo', 'Redo',
    ],
    itemConfigs: {}
  };

  @ViewChild('richTextEditor')
  public rteObj!: RichTextEditorComponent;


  @ViewChild('title')
  public title!: ElementRef;

  isDescriptionEmpty(): boolean {
    const textContent = this.rteObj.getText().trim();
    return textContent === '';
  }

  async publishIdea() {
    const htmlContent: string = this.rteObj.getHtml();
    const title = this.title.nativeElement.value;

    if (!this.isDescriptionEmpty() && title !== '') {
      try {
        await this.ideaService.publishIdea(title, htmlContent);
        alert("Idea pubblicata!");
        this.router.navigate(['home']).then(() => { window.location.reload() });
      } catch (error) {
        alert(`Errore nella pubblicazione dell'idea\nErrore: ${JSON.stringify(error)}`);
      }
    } else {
      alert("Scrivi qualcosa!");
    }
  }
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
