import { Injectable } from '@nestjs/common';
import { askAI } from 'src/utils/askAI';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GeneratedPages } from '../schemas/generatedpages.schema';
    
@Injectable()
export class AibuilderService {
    constructor(
        @InjectModel(GeneratedPages.name)
        private readonly generatedPagesModel: Model<GeneratedPages>,
    ) {}

    async generatePages(prompt: string): Promise<string>{
        
        try{
            const generatedsections = await askAI(prompt);

            await this.generatedPagesModel.create({ prompt, generatedsections });

            return generatedsections;

        }catch(error){
            console.error('Error generating pages:', error);
            throw new Error('Failed to generate pages');
        }
    }

    async getGeneratedPages(): Promise<GeneratedPages[]> {
        return this.generatedPagesModel.find().sort({ createdAt: -1 }).exec();
    }

}
