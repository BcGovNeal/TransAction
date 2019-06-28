﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TransAction.Data.Models;
using TransAction.Data.Repositories.Interfaces;

namespace TransAction.Data.Repositories
{
    public class MessageRepository : RepositoryBase<TraTopicMessage>, IMessageRepository
    {
        public MessageRepository(TransActionContext repositoryContext) : base(repositoryContext)
        {
        }

        public IEnumerable<TraTopicMessage> GetAllMessages(int page, int pageSize, int topicId)
        {
            if (--page < 0) page = 0;
            return FindAll().Where(x => x.TopicId == topicId).Skip(page * pageSize).Take(pageSize).ToList();
        }

        public TraTopicMessage GetMessageById(int id)
        {
            return Find(e => e.TopicMessageId == id).FirstOrDefault();
        }
    }
}
