import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as sc } from 'mongoose';
export type QuestionDocument = Question & Document;

@Schema({ timestamps: true })
export class Question {
    @Prop()
    id: string;

    @Prop()
    question: string;

    @Prop()
    big5EnvIndicator: string;

    @Prop()
    tags: string[];

    @Prop([
        {
            Openness: { type: String },
            _id: { type: sc.Types.ObjectId },
            Conciencetious: { type: String },
            Extraversion: { type: String },
            Agreeable: { type: String },
            Neuroticism: { type: String },
        },
    ])
    personality: any[];

    @Prop(
        raw({
            pointHigh: { type: Number },
            pointMedium: { type: Number },
            pointLow: { type: Number },
        }),
    )
    point: { pointHigh: number; pointMedium: number; pointLow: number };

    @Prop(
        raw({
            label: { type: String },
            parent: {
                type: {
                    label: { type: String },
                    _id: { type: sc.Types.ObjectId },
                },
            },
        }),
    )
    facet: { label: string; parent: { label: string } };

    @Prop(
        raw({
            label: { type: String },
        }),
    )
    keyword: { label: string };
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
