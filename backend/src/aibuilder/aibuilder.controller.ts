import { Body, Controller, Post, Res, HttpStatus, Get } from '@nestjs/common';
import { AibuilderService } from './aibuilder.service';
import { GeneratePagesDto } from './dto/generatepages.dto';
import { Response } from 'express';

@Controller('aibuilder')
export class AibuilderController {
    constructor(private readonly aibuilderService: AibuilderService){}

    @Post('generate')
    async generatePages(@Body() dto: GeneratePagesDto, @Res() res: Response) {


        try{
            const response = await this.aibuilderService.generatePages(dto.prompt);
        return res.status(HttpStatus.OK).json({
            message: 'Page generated successfully',
            data: response,
            });

        }catch(error){

            console.error('Error in generatePages:', error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Failed to generate page',
                error: error.message,
            });

        }
    }

    @Get('history')
    async getHistory(@Res() res:Response) {
        try {
            const generatedPages = await this.aibuilderService.getGeneratedPages();
            return res.status(HttpStatus.OK).json({
                message: 'History retrieved successfully',
                data: generatedPages,
            });
        } catch (error) {
            console.error('Error in getHistory:', error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Failed to retrieve history',
                error: error.message,
            });
        }
    }

}
