public class Student {

    // Constructor
    public Student() {
        System.out.println("Creating Student Object");
    }

    // Method
    public void sayHello() {
        System.out.println("Hey, I'm from Student");
    }

    // main() is optional here
    public static void main(String[] args) {
        // You can test here if you want
        Student student = new Student();
        student.sayHello();
    }
}
