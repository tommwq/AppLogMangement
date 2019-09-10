package com.github.tommwq.applogmanagement.logging;

import com.github.tommwq.applogmanagement.AppLogManagementProto.LogRecord;
import java.util.List;

public interface LogRecordReader {

        LogRecord read();
        List<LogRecord> readAll();
}