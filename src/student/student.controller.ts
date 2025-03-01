import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() data: Partial<Student>): Promise<Student> {
    return this.studentService.createStudent(data);
  }
  @Get()
  async getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Get(':id')
  async getStudentById(@Param('id') id: number): Promise<Student> {
    return this.studentService.getStudentById(id);
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: number,
    @Body() data: Partial<Student>,
  ): Promise<Student> {
    return this.studentService.updateStudent(id, data);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: number): Promise<void> {
    return this.studentService.deleteStudent(id);
  }
}
