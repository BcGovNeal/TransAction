﻿CREATE TABLE [dbo].[TRA_EVENT_USER] (
    [EVENT_USERS_ID]       INT IDENTITY (1, 1) NOT NULL,
    [EVENT_ID] INT NOT NULL,
    [USER_ID]  INT NOT NULL,
	[EFFECTIVE_START_DATE] DATETIME NULL, 
	[EFFECTIVE_END_DATE] DATETIME NULL, 
	[CREATED_BY_USER] VARCHAR(255) NULL, 
	[CREATED_BY_DATE] DATETIME NULL, 
	[LAST_UPDATED_BY_USER] VARCHAR(255) NULL, 
	[LAST_UPDATED_BY_DATE] DATETIME NULL,
    CONSTRAINT [PK_EVENT_USERS] PRIMARY KEY CLUSTERED ([EVENT_USERS_ID] ASC),
    CONSTRAINT [FK_EVENT_EVENT_USERS] FOREIGN KEY ([EVENT_ID]) REFERENCES [dbo].[TRA_EVENT] ([EVENT_ID]),
    CONSTRAINT [FK_EVENT_USER_USER] FOREIGN KEY ([USER_ID]) REFERENCES [dbo].[TRA_USER] ([USER_ID])
);


GO
CREATE NONCLUSTERED INDEX [IX_FK_EVENT_EVENT_USERS]
    ON [dbo].[TRA_EVENT_USER]([EVENT_ID] ASC);


GO
CREATE NONCLUSTERED INDEX [IX_FK_EVENT_USER_USER]
    ON [dbo].[TRA_EVENT_USER]([USER_ID] ASC);

