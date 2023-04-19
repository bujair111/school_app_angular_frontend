import { Component } from '@angular/core';
import { ClassService } from '../../../services/class/class.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent {
classes: any
msg: string =''

itemArray: any

  constructor(private classService: ClassService){}

  submit(formData: any){
    this.classService.addClass(formData).subscribe((res:{ statusCode: Number, msg: string })=>{
      console.log(res.msg,res.statusCode)
      console.log(formData)
    })
  }

  ngOnInit(){
  this.viewAllClasses()
  }
  viewAllClasses(){
    this.classService.getClasses().subscribe((res:{classes: any, statusCode: Number, msg: string })=>{
      this.classes =  res.classes
      this.msg = res.msg
      console.log(res.classes)

      this.itemArray = res.classes

    })
  }

  deleteclass(id: number){
    this.classService.deleteClass(id).subscribe((res:{statusCode: Number, msg: string })=>{
      console.log(res.msg)


      let index = this.itemArray.findIndex((obj: { id: number; }) => obj.id == id);
          if (index != -1) {
              this.itemArray.splice(index, 1);
          }
          
      // this.viewAllClasses()
    })
  }
}
