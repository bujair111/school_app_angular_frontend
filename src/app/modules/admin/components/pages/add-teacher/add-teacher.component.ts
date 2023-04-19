import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeacherService } from '../../../services/teacher/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent {

  msg = ''
constructor(private teacherService: TeacherService){}
teacherPic: any;

onImageChanged(event: any){

  this.teacherPic = event.target.files[0]
// 
}

  teacherFormSubmit(formData: any){

      const uploadedData = new FormData()
                        // key name    //name in input type
      uploadedData.append('name', formData['name'])
      uploadedData.append('designation', formData['designation'])
      uploadedData.append('email', formData['email'])
      uploadedData.append('phone', formData['phone'])
      uploadedData.append('gender', formData['gender'])

      uploadedData.append('pic', this.teacherPic)

      uploadedData.append('dob', formData['dob'])
      uploadedData.append('password', formData['password'])


    console.log(uploadedData)
    this.teacherService.addTeacher(uploadedData).subscribe((res:{ statusCode: Number, msg: string }) =>{
      this.msg = res.msg
      console.log(this.msg)
    })


  }

}
