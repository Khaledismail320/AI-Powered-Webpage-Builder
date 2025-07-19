import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AibuilderModule } from './aibuilder/aibuilder.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { SchemasModule } from './schemas/schemas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    AibuilderModule,
    DatabaseModule,
    SchemasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}