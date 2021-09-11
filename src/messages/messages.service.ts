import { Logger, Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";
import { hostname } from "os";

@Injectable()
export class MessagesService {
  private readonly logger = new Logger(MessagesService.name);

  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    this.logger.log(`searching: ${id}`);
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    const date = Date.now();
    this.logger.log(`${hostname} - ${date}`);
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    const date = Date.now();
    this.logger.log(`${hostname} - ${date} : ${content}`);
    return this.messagesRepo.create(content);
  }
}
