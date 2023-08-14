import { Component } from '@angular/core';

interface FileItem {
  name: string;
  description: string;
  isDirectory: boolean;
  children?: FileItem[];
}


@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.css'],
})

export class FileBrowserComponent {

  fileList: FileItem[] = [
    {
      name: 'Folder 1',
      description: 'Description for Folder 1',
      isDirectory: true,
      children: [
        { name: 'Subfolder 1-1', description: 'Description for Subfolder 1-1', isDirectory: true },
        { name: 'File 1-1.txt', description: 'Description for File 1-1.txt', isDirectory: false },
      ],
    },
    {
      name: 'Folder 2',
      description: 'Description for Folder 2',
      isDirectory: true,
      children: [
        { name: 'Subfolder 2-1', description: 'Description for Subfolder 2-1', isDirectory: true },
        { name: 'File 2-1.txt', description: 'Description for File 2-1.txt', isDirectory: false },
      ],
    },
    { name: 'File 1.txt', description: 'Description for File 1.txt', isDirectory: false },
    { name: 'File 2.txt', description: 'Description for File 2.txt', isDirectory: false },
  ];

  filteredList: FileItem[] = [...this.fileList];
  selectedItem: FileItem | null = null;

  getDescriptionWithIcon(item: FileItem | null): string {
    if (!item) return '';

    const icon = item.isDirectory ? 'folder' : 'description';
    return `${icon} - ${item.description}`;
  }
 

  onItemClick(item: FileItem): void {
      this.selectedItem = item;
  }

  onOkClick(): void {
    console.log('Ok button clicked');
  }

  onCancelClick(): void {
    console.log('Cancel button clicked');
  }
  goToFolder(folder: FileItem): void {
    if (folder.isDirectory && folder.children) {
      this.selectedItem = folder;
    }
  }
}
