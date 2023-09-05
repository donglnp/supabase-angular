import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'supabase-angular';

  constructor(private readonly supabaseService: SupabaseService) {}
  ngOnInit(): void {
    // this.onSubmit();

  }

  async onSubmit(): Promise<void> {
    try {
      const email = 'huynhdong.dev@gmail.com';
      const { error } = await this.supabaseService.signIn(email);
      console.log('aaaa');
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }
}
