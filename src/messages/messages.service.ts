import { Logger, Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
  private readonly logger = new Logger(MessagesService.name);

  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    this.logger.log(`searching: ${id}`);
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    this.logger.log(`searching ...`);
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    this.logger.warn(`creating: ${content}`);
    return this.messagesRepo.create(content);
  }
}
